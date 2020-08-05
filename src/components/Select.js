import React, {useState} from "react";
import Arrow from './.././assets/Icon-Arrow-Down.svg'

export const Select = ({title, items, selectChange, ident}) => {
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
    const handleTitle = (e) => {
        selectChange(e)
        setChecked(e.target.innerText)
    }

    return (
            <div>
                <div className={'select__box'} onClick={handleOpen}>
                    <p className={'select__title'}>{selectedItem(title)}</p>
                    <img className={(open === false ? 'arrow__rotate1' : 'arrow__rotate2')} alt={'arrow'} src={Arrow} />
                </div>
                <div className={'select__items-box'}>
                    {open && (
                        <ul className={'select__list'} onClick={handleOpen}>
                            {items.map((item, index) => (
                                <li  className={'select__item'} key={index} id={ident} onClick={handleTitle}>{item}</li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
    )
}