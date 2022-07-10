import React, { useState } from "react";
import Button from "./Components/Button";
import ContentList from "./Components/ContentList";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import InputField from "./Components/InputField";
import Message from "./Components/Message";
import Modal from "./Components/Modal";
import Pagination from "./Components/Pagination";
import { Column, Container, Flex, Main } from "./Styles/App";
import { Card } from "./Styles/Card";
import { ItemType } from "./Types/ItemType";
import { Style } from "./Types/Style";

export default function App() {
  const [searchKeyword, setSearchKeyword] = useState<string>("");
  const [items, setItems] = useState<ItemType[]>([]);
  const [error, setError] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  const [itemsToDisplay, setItemsToDisplay] = useState<number>(0);
  const [numberOfPages, setNumberOfPages] = useState<number>(1);
  const [show, setShow] = useState<boolean>(false) 
  const [selectedId, setSelectedId] = useState<string>("");
  const itemsPerPage = 40;
  const fetchData = async (url: string) => {
    try {
      const data = await fetch(url);
      const json = await data.json();
      setItems(json.data);
      setNumberOfPages(Math.ceil(json.pagination.total_count/itemsPerPage));
    } catch (error) {
      setError(true);
      setMessage("Error fetching data");
      console.error(error);
      setTimeout(() => setError(false), 5000);
    }
  };

  const handleButton = () => {
    setItemsToDisplay(0);
    const searchURL = `https://api.giphy.com/v1/gifs/search?q=${searchKeyword}&api_key=${process.env.REACT_APP_GIPHY_KEY}&limit=${itemsPerPage}&offset=${0}`;
    fetchData(searchURL)
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchKeyword(e.target.value);
  };

  const handleItemsToDisplay = (index: number) => {
    const searchURL = `https://api.giphy.com/v1/gifs/search?q=${searchKeyword}&api_key=${process.env.REACT_APP_GIPHY_KEY}&limit=${itemsPerPage}&offset=${index}`;
    setItemsToDisplay(index);
    fetchData(searchURL);
  };

  const selectedGif = items.find(el => el.id === selectedId)

  return (
    <Container>
      <Header />
      <Main>
        <div>
          <Flex>
            <Column>
              <Card>
                <InputField
                  placeholder="Type here ..."
                  handleInput={handleInput}
                  onKeyDown={handleButton}
                />
                <Button
                  name="Search"
                  onClick={handleButton}
                  disabled={searchKeyword === ""}
                  dataTestId="search"
                />
              </Card>
              <ContentList items={items} setShow={setShow} setSelectedId={setSelectedId} />
              <Modal setShow={setShow} show={show} selectedGif={selectedGif} />
              {error ? <Message style={Style.Error} message={message} /> : null}
              {numberOfPages > 1 ? <Pagination numberOfPages={numberOfPages} handleItemsToDisplay={handleItemsToDisplay} itemsToDisplay={itemsToDisplay} itemsPerPage={itemsPerPage} /> : null}
            </Column>
          </Flex>
        </div>
      </Main>
      <Footer />
    </Container>
  );
}
