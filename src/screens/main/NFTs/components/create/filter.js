import { datas } from "../../../../../components/datas";

export const filter = (id) => {
    const filterObject = Object
        .values(datas.markplace)
        .flat()
        .filter(_itm => _itm.id === id)[0];

    return filterObject;
}