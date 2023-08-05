import { Box } from "@chakra-ui/layout";
import { Skeleton, SkeletonText } from "@chakra-ui/skeleton";

const SkeletonCard = () => {
  /*SKELETON PARA MOSTRAR DURANTE LA CARGA DE PRODUCTOS EN EL HOME*/
  let skeletonArray = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
    { id: 7 },
    { id: 8 },
  ];
  return (
    <>
      {skeletonArray.map((element) => {
        return (
          <Box backgroundColor={"#0e1428"} key={element.id}>
            <Skeleton
              w={["200px", "250px", "375px", "375px"]}
              h={["200px", "300px", "370px", "370px"]}
              startColor="#ffffff"
              endColor="#f1f1f1"
              boxShadow={" 5px 15px 30px -10px rgba(0,0,0,0.76)"}
            ></Skeleton>
            <SkeletonText
              mt="2"
              noOfLines={1}
              skeletonHeight="100px"
              startColor="#ffffff"
              endColor="#f1f1f1"
              boxShadow={" 5px 15px 30px -10px rgba(0,0,0,0.76)"}
            />
          </Box>
        );
      })}
    </>
  );
};

export default SkeletonCard;
