import { Button, Text } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
  children: string;
}

const ExpandableText = ({ children }: Props) => {
  const [expandable, setExpandable] = useState(false);
  const limit = 300;
  if(!children) return null;
  if (children.length <= limit) return <Text>{children}</Text>;
  const summary = expandable ? children : children.substring(0, limit) + "...";

  return (
    <Text>
      {summary}
      <Button
        size="xs"
        marginLeft={2}
        colorScheme="yellow"
        fontWeight="900"
        onClick={() => setExpandable(!expandable)}
      >
        {expandable ? "show less" : "read more"}
      </Button>
    </Text>
  );
};

export default ExpandableText;
