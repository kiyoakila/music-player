import { Box, Flex, Text } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/react";

const GradientLayout = ({
  color,
  children,
  image,
  subtitle,
  title,
  description,
  roundImage,
}) => {
  return (
    <Box
      height="100%"
      overflowY="auto"
      bgGradient={`linear(${color}.500 0%, ${color}.600 15%, ${color}.700 40%, rgba(0,0,0,0.95) 75%)`}
    >
      {/* header of page */}
      <Flex bg={`${color}.600`} padding="40px" align="end">
        {/* avatar or album image */}
        <Box padding="20px">
          <Image
            boxSize="160px"
            boxShadow="2xl"
            src={image}
            borderRadius={roundImage ? "100%" : "3px"}
          />
        </Box>
        {/* information */}
        <Box padding="20px" lineHeight="40px" color="white">
          {/* subtitle */}
          <Text fontSize="x-small" fontWeight="bold" casing="uppercase">
            {subtitle}
          </Text>
          {/* title */}
          <Text fontSize="6xl">{title}</Text>
          {/* description */}
          <Text fontSize="x-small">{description}</Text>
        </Box>
      </Flex>
      {/* render the child */}
      <Box paddingY="50px">{children}</Box>
    </Box>
  );
};

export default GradientLayout;
