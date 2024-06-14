import { Box, Button, Flex, Text, Image } from "@chakra-ui/react";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { usePage, useHama } from "../state";

const ManajemenHama = () => {
  const {setPage} = usePage();
  const {setIndex, toggleDetail, setFrom} = useHama();

  const hama = [
    {
      nama: "Lalat Buah",
      jumlah: 200,
    },
    {
      nama: "Tikus",
      jumlah: 50,
    },
    {
      nama: "Kutu Putih",
      jumlah: 100,
    },
    {
      nama: "Lalat Buah",
      jumlah: 200,
    },
    {
      nama: "Tikus",
      jumlah: 50,
    },
    {
      nama: "Kutu Putih",
      jumlah: 100,
    },
  ];

  return (
    <Box w={"85%"} mx={"auto"} pos={"relative"}>
      <Flex align={"center"} justify={"space-between"} mb={3}>
        <Text fontWeight={"bold"} fontSize={"2vh"}>
          Manajemen Hama
        </Text>
        <Button
          bg={"white"}
          fontWeight={"normal"}
          fontSize={"8pt"}
          h={"fit-content"}
          py={1}
          px={2}
          borderRadius={"30px"}
          onClick={() => {setPage("Prediksi Hama")}}
        >
          Lihat Semua
        </Button>
      </Flex>

      <Box h={"fit-content"} pos={"relative"}>
        <Swiper spaceBetween={20} slidesPerView={2.5} slidesOffsetAfter={30}>
          {hama.map((item, index) => (
            <SwiperSlide
            key={index}>
              <Button
                variant={"unstyled"}
                pos={"relative"}
                h={"150px"}
                w={"130px"}
                borderRadius={"20px"}
                bg={"white"}
                onClick={() => {
                  setIndex(index);
                  setFrom("Home");
                  toggleDetail();
                  setPage('Prediksi Hama');
                }}
              >
                <Image
                  src="/assets/lalat buah.png"
                  pos={"absolute"}
                  right={0}
                  h={"60%"}
                  w={"100%"}
                  objectFit={"cover"}
                  zIndex={0}
                  borderRadius={"20px 20px 0 0"}
                  style={{
                    WebkitMaskImage:
                      "linear-gradient(to top, rgba(237, 237, 237, 0), rgba(237, 237, 237, 1))",
                    maskImage:
                      "linear-gradient(to top, rgba(237, 237, 237, 0), rgba(237, 237, 237, 1))",
                  }}
                ></Image>

                <Flex
                  direction={"column-reverse"}
                  align={"end"}
                  h={"100%"}
                  px={2}
                  pb={"0.8vh"}
                  zIndex={1}
                  gap={2}
                >
                  <Flex
                    alignItems={"center"}
                    justify={"space-between"}
                    w={"100%"}
                  >
                    <Text
                      fontSize={"7pt"}
                      lineHeight={1}
                      fontWeight={"normal"}
                      textAlign={"start"}
                    >
                      Jumlah <br />
                      Hama
                    </Text>
                    <Text fontWeight={"bold"} fontSize={"16pt"}>
                      {item.jumlah}
                    </Text>
                  </Flex>

                  <Flex direction={"column"} w={"30%"} align={"end"}>
                    <Text
                      fontWeight={"bold"}
                      textAlign={"end"}
                      fontSize={"8pt"}
                      lineHeight={1}
                    >
                      {item.nama}
                    </Text>
                    <Text fontSize={"6pt"} color={"#d4d4d4"}>
                      20/2/2024
                    </Text>
                  </Flex>
                </Flex>
              </Button>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Box>
  );
};

export default ManajemenHama;
