import React, {useState, useMemo} from "react";
import List from "./List";

function mapItens(itens) {
    return itens.map((value, i) => ({ key: i.toString(), value}));
}

const array = new array(100).fill(null).map((v,i) => `Item ${i}`);

function filterAndSort(text, asc) {
    return array
    .filter((i) => text.length === 0 || i.includes(text))
    .sort(
        asc
        ? (a, b) => (a > b ? 1 : a < b ? -1 : 0)
        : (a, b) => (b > a ? 1 : b < a ? -1 : 0)
    );
}

export default function ListContainer() {
    const [asc, setAsc] = useState(true);
    const [filter, setFilter] = useState("");

    const data = useMemo(() => {
        return filterAndSort(filter, asc);
    }, [filter,asc]);
    
    return (
    <List
        data={mapItens(data)}
        asc={asc}
        onFilter={(text) => {
            setFilter(text);
        }}
        onSort={() =>{
            setAsc(!asc);
        }}
    />
    );
}
