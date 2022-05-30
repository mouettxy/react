import React, { useRef } from "react";
import ReactDOM from "react-dom";
import { usePopper } from "react-popper";
import style from "./dropdown.css";

interface IDropdownProps {
  button: React.ReactNode;
  children: React.ReactNode;
  isOpen?: boolean;
  onOpen?: () => void;
  onClose?: () => void;
}

const NOOP = () => {};

export function Dropdown({
  button,
  children,
  isOpen,
  onClose = NOOP,
  onOpen = NOOP,
}: IDropdownProps) {
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(isOpen);
  React.useEffect(() => setIsDropdownOpen(isOpen), [isOpen]);
  React.useEffect(
    () => (isDropdownOpen ? onOpen() : onClose()),
    [isDropdownOpen]
  );

  const node = document.querySelector("#dropdown_root");
  if (!node) return null;
  const [referenceElement, setReferenceElement] =
    React.useState<HTMLDivElement | null>(null);
  const [popperElement, setPopperElement] =
    React.useState<HTMLDivElement | null>(null);
  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    placement: "bottom-end",
  });

  const handleOpen = () => {
    // if (isOpen === undefined) {
    //   setIsDropdownOpen(!isDropdownOpen)
    // }
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className={style.container} ref={setReferenceElement}>
      <div onClick={handleOpen}>{button}</div>
      {isDropdownOpen &&
        ReactDOM.createPortal(
          <div
            className={style.listContainer}
            ref={setPopperElement}
            style={styles.popper}
            {...attributes.popper}
          >
            <div
              className={style.list}
              onClick={() => setIsDropdownOpen(false)}
            >
              {children}
            </div>
          </div>,
          node
        )}
    </div>
  );
}
