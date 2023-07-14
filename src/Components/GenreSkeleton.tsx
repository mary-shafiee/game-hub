import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

const GenreSkeleton = () => {
  return (
    <Card height={"50vh"} flexDirection={"row"}>
      <Skeleton width={"100px"} />
      <CardBody>
        <SkeletonText width={"100px"} />
      </CardBody>
    </Card>
  );
};

export default GenreSkeleton;
