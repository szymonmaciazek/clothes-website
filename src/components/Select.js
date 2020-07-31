import React, {useState} from "react";

export const Select = ({title, items}) => {
    const [open, setOpen] = useState(false);
    const [checked, setChecked] = useState('');

    const handleOpen = () => {
        setOpen(!open)
    }
    const selectedItem = () => {
        if (checked === '') {
            return title
        }
        return checked
    }

    return (
            <div>
                <div className={(open === false ? 'select__box' : 'select__box arrow__rotate')} onClick={handleOpen}>
                    <p className={'select__title'}>{selectedItem(title)}</p>
                </div>
                <div>
                    {open && (
                        <ul className={'select__list'} onClick={handleOpen}>
                            {items.map((item, index) => (
                                <li  className={'select__item'} key={index} onClick={() => setChecked(item)}>{item}</li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
    )
}