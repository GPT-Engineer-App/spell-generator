import React, { useState } from "react";
import { Box, Button, Container, Heading, Input, Text, VStack, useToast } from "@chakra-ui/react";
import { FaMagic } from "react-icons/fa";

// Mock function to generate a random spell
const generateRandomSpell = (ingredientInput) => {
  const ingredient = ingredientInput.trim().length === 0 ? "Mysterious" : ingredientInput;
  const spellTypes = ["Fire", "Ice", "Wind", "Earth", "Lightning", "Water"];
  const spellModifiers = ["Blast", "Wave", "Bolt", "Shield", "Storm", "Beam"];
  const powerLevels = ["Minor", "Major", "Epic", "Legendary"];

  const randomType = spellTypes[Math.floor(Math.random() * spellTypes.length)];
  const randomModifier = spellModifiers[Math.floor(Math.random() * spellModifiers.length)];
  const randomPower = powerLevels[Math.floor(Math.random() * powerLevels.length)];

  return `${ingredient} ${randomPower} ${randomType} ${randomModifier} Spell`;
};

const Index = () => {
  const [spell, setSpell] = useState("");
  const [ingredient, setIngredient] = useState("");
  const toast = useToast();

  const handleGenerateSpell = () => {
    const newSpell = generateRandomSpell(ingredient);
    setSpell(newSpell);
    toast({
      title: "New Spell Created",
      description: newSpell,
      status: "success",
      duration: 3000,
      isClosable: true,
    });
    setIngredient("");
  };

  return (
    <Container maxW="container.md" p={4}>
      <VStack spacing={4} as="main" align="stretch" justify="center" minHeight="100vh">
        <Heading as="h1" size="2xl" textAlign="center">
          Spell Generator <FaMagic />
        </Heading>
        <Box p={4} borderWidth="1px" borderRadius="lg" boxShadow="base" mb={4}>
          <Input placeholder="Enter an ingredient" value={ingredient} onChange={(event) => setIngredient(event.target.value)} mb={4} />
          <Text fontSize="lg" mb={4} textAlign="center">
            {spell || "Click the button to generate a spell!"}
          </Text>
          <Button leftIcon={<FaMagic />} colorScheme="purple" size="lg" onClick={handleGenerateSpell} isDisabled={!ingredient}>
            Generate Spell
          </Button>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
