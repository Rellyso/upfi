import { SimpleGrid, useDisclosure } from '@chakra-ui/react';
import { useState } from 'react';
import { Card } from './Card';
import { ModalViewImage } from './Modal/ViewImage';

interface Card {
  title: string;
  description: string;
  url: string;
  ts: number;
  id: string;
}

interface CardsProps {
  cards: Card[];
}

const exampleData = [
  {
    title: "Doge",
    description: "The best doge",
    url: "https://i.ibb.co/K6DZdXc/minh-pham-LTQMgx8t-Yq-M-unsplash.jpg",
    ts: 1620222828340000,
    id: "294961059684418048"
  },
  {
    title: "Cachorrinho gif",
    description: "A Gracie é top",
    url: "https://i.ibb.co/r3NbmgH/ezgif-3-54a30c130cef.gif",
    ts: 1620222856980000,
    id: "295991055792210435"
  },
  {
    title: "React",
    description: "Dan Abramov",
    url: "https://i.ibb.co/864qfG3/react.png",
    ts: 1620223108460000,
    id: "295991069654385154"
  },
  {
    title: "Ignite",
    description: "Wallpaper Celular",
    url: "https://i.ibb.co/DbfGQW5/1080x1920.png",
    ts: 1620223119610000,
    id: "295991085899973123"
  },
  {
    title: "Ignite",
    description: "Wallpaper PC 4k",
    url: "https://i.ibb.co/fvYLKFn/3840x2160.png",
    ts: 1620223133800000,
    id: "295991107279389188"
  },
  {
    title: "Paisagem",
    description: "Sunset",
    url: "https://i.ibb.co/st42sNz/petr-vysohlid-9fqw-Gq-GLUxc-unsplash.jpg",
    ts: 1620223149390000,
    id: "295991128736399874"
  }
]

export function CardList({ cards }: CardsProps): JSX.Element {
  // TODO MODAL USEDISCLOSURE
  const { isOpen, onOpen, onClose } = useDisclosure();

  // TODO SELECTED IMAGE URL STATE
  const [selectedImgUrl, setSelectedImgUrl] = useState('')

  // TODO FUNCTION HANDLE VIEW IMAGE
  function handleViewImage(url: string): void {
    setSelectedImgUrl(url)
    onOpen()
  }

  return (
    <>
      {/* TODO CARD GRID */}
      <SimpleGrid columns={3} spacing={10}>
        {cards && cards.map(card => (
          <Card key={card.id} data={card} viewImage={handleViewImage} />
        ))}
      </SimpleGrid>

      {/* TODO MODALVIEWIMAGE */}
      <ModalViewImage isOpen={isOpen} onClose={onClose} imgUrl={selectedImgUrl} />
    </>
  );
}
