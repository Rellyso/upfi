import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  Image,
  Link,
} from '@chakra-ui/react';

interface ModalViewImageProps {
  isOpen: boolean;
  onClose: () => void;
  imgUrl: string;
}

export function ModalViewImage({
  isOpen,
  onClose,
  imgUrl,
}: ModalViewImageProps): JSX.Element {
  // TODO MODAL WITH IMAGE AND EXTERNAL LINK
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent
        w="fit-content"
        h="fit-content"
        maxW={900}
        maxH={600}
      >
        <ModalBody
          p="0"
        >
          <Image
            src={imgUrl}
            w="auto"
            h="fit-content"
            maxW={900}
            maxH={600}
          />
        </ModalBody>
        <ModalFooter bgColor="pGray.800" justifyContent="flex-start">
          <Link isExternal href={imgUrl}>Abrir original</Link>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}
