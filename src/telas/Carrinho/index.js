import React from 'react';

import { FlatList } from 'react-native';

import StatusCarrinho from '../../componentes/StatusCarrinho';
import Item from './Item';

const servicos = [
    {
        id: 4,
        nome: 'Escova de gato',
        preco: 12.8,
        descricao: 'Escova de canto, massagem para seu gato.',
        quantidade: 1
    },
    {
        id: 1,
        nome: 'Adesivo de parede luminoso',
        preco: 9.9,
        descricao: 'Brilham no escuro. Popular decoração de quarto de criançãs.',
        quantidade: 2
    },
    {
        id: 6,
        nome: 'Quartzo branco',
        preco: 34.75,
        descricao: 'Pedra natural de quartzo. Coleção. Cura.',
        quantidade: 1
    }
];

export default function Carrinho() {
    const total = servicos.reduce((soma, { preco, quantidade }) => soma + preco * quantidade, 0);

    return (
        <>
            <StatusCarrinho total={total} />
            <FlatList data={servicos} renderItem={({ item }) => <Item {...item} />} keyExtractor={({ id }) => String(id)} />
        </>
    );
}
