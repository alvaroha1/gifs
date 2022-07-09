import { Main, List, ListElement, HideInMobile } from "../Styles/Footer";
import { GrMailOption, GrGithub } from "react-icons/gr";

export default function Footer() {
  const author = "Alvaro Hernandez Assens";
  const email = "alvarohernandezassens@gmail.com";
  const github_link = "https://github.com/alvaroha1/gifs";
  const year = "© 2022";
  return (
    <Main>
      <List>
        <ListElement>
          <HideInMobile>{author}</HideInMobile>
        </ListElement>
        <ListElement>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href={`mailto:${email}`}
            title="Opens in a new window"
          >
            <GrMailOption />
          </a>
        </ListElement>
        <ListElement>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href={`${github_link}`}
            title="Opens in a new window"
          >
            <GrGithub />
          </a>
        </ListElement>

        <ListElement>
          <HideInMobile>
            {year} (
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://creativecommons.org/licenses/by-sa/3.0/"
              title="Opens in a new window"
            >
              cc-by-sa
            </a>
            )
          </HideInMobile>
        </ListElement>
      </List>
    </Main>
  );
}
