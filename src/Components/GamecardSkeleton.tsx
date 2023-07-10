import { Card, CardBody, Skeleton, SkeletonText } from '@chakra-ui/react'

const GamecardSkeleton = () => {
  return (
    <Card width={'300px'}  borderTopRadius={10} overflow={"hidden"}>
      <Skeleton height={'200px'}/>
      <CardBody>
        <SkeletonText/>
      </CardBody>
    </Card>
  )
}

export default GamecardSkeleton
