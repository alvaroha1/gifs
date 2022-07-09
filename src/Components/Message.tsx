import { Box, ErrorBox, ErrorText, SuccessBox, SuccessText, Text } from "../Styles/Message";
import { Style } from "../Types/Style";

interface Props {
  message: string;
  style: Style;
}

export default function PaginationArrow({ style, message }: Props) {
  if (style === Style.Error) {
    return (
      <ErrorBox>
        <ErrorText>{message}</ErrorText>
      </ErrorBox>
    );
  } else if (style === Style.Success) {
    return (
      <SuccessBox>
        <SuccessText>{message}</SuccessText>
      </SuccessBox>
    );
  } else {
    return (
      <Box>
        <Text>{message}</Text>
      </Box>
    );
  }
}
