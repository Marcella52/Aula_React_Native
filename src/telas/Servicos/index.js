import React from 'react';

import { FlatList } from 'react-native';

import Item from './Item';

const servicos = [
    {
        id: 1,
        nome: 'Adesivo de parede luminoso',
        preco: 9.9,
        descricao: 'Brilham no escuro. Popular decoração de quarto de criançãs.'
    },
    {
        id: 2,
        nome: 'Luzes em cortina',
        preco: 89.9,
        descricao: 'Guirlanda de natal feliz para decoração.'
    },
    {
        id: 3,
        nome: 'Brinco de tsuru',
        preco: 19.9,
        descricao: 'Nova moda. Pásaro tamanho de gota.'
    },
    {
        id: 4,
        nome: 'Escova de gato',
        preco: 12.8,
        descricao: 'Escova de canto, massagem para seu gato.'
    },
    {
        id: 5,
        nome: 'Chaveiro de bolso multiferramenta',
        preco: 5.25,
        descricao: 'Em formato de chave, mini chave de fenda phillips.'
    },
    {
        id: 6,
        nome: 'Quartzo branco',
        preco: 34.75,
        descricao: 'Pedra natural de quartzo. Coleção. Cura.'
    },
    {
        id: 7,
        nome: 'Abajur de lua',
        preco: 19.9,
        descricao: 'Luminaria com quatro tipos diferentes de cor.'
    }
];

export default function Servicos() {
    return (
        <>
            <FlatList data={servicos} removeClippedSubviews={false} renderItem={({ item }) => <Item {...item} />} keyExtractor={({ id }) => String(id)} />
        </>
    );
}
