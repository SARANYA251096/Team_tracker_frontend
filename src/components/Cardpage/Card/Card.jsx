import {
  Button,
  Card,
  CardBody,
  Flex,
  Heading,
  Input,
  Text,
  Textarea,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import "./style.css";
import notebg from "../../../assets/note_bg.png";
import { useDispatch } from "react-redux";
import { deleteCards, updateCards } from "../../../Redux/cards/card.actions";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { useRef, useState } from "react";

export default function Cards({ title, body, user, _id }) {
  const dispatch = useDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = useRef(null);
  const finalRef = useRef(null);
  const [tempTitle, setTitle] = useState(title);
  const [tempBody, setBody] = useState(body);

  const updateCard = () => {
    dispatch(updateCards(_id, { title: tempTitle, body: tempBody }));
    onClose();
  };

  return (
    <Card
      key={_id}
      backgroundImage={`url(${notebg})`}
      width="300px"
      p={4}
      borderRadius="md"
      boxShadow="md"
    >
      <CardBody>
        <VStack spacing={2} align="start">
          <Heading fontSize="xl">{title}</Heading>
          <Text fontSize="sm" color="gray.500">
            {body}
          </Text>

          <Flex justify="space-between" w="100%">
            <Button size="sm" onClick={onOpen}>
              Update
            </Button>
            <Button
              size="sm"
              colorScheme="red"
              onClick={() => dispatch(deleteCards(_id))}
            >
              Delete
            </Button>
          </Flex>

          <Modal
            initialFocusRef={initialRef}
            finalFocusRef={finalRef}
            isOpen={isOpen}
            onClose={onClose}
          >
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Update Note</ModalHeader>
              <ModalCloseButton />
              <ModalBody pb={6}>
                <Input
                  value={tempTitle}
                  m
                  placeholder="Please enter title"
                  onChange={(e) => setTitle(e.target.value)}
                ></Input>
                <Textarea
                  mt={8}
                  value={tempBody}
                  placeholder={"Please enter description"}
                  onChange={(e) => setBody(e.target.value)}
                ></Textarea>
              </ModalBody>

              <ModalFooter>
                <Button colorScheme="blue" mr={3} onClick={updateCard}>
                  Update
                </Button>
                <Button onClick={onClose}>Cancel</Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </VStack>
      </CardBody>
    </Card>
  );
}
