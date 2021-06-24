import { useLayoutEffect, useRef, useState } from 'react';
import Head from 'next/head';
import styles from './ModalWindow.module.css';
import removeExtraSpace from '../helpers/removeExtraSpace';

interface Props {
  handleHideModal: () => void;
  handleFormSubmit: (searchValue: string) => void;
  errorMsgIsDisplayed: boolean;
}

const defaultPlaceholder = 'Enter the project title';

export default function AddNewProject({
  handleHideModal,
  handleFormSubmit,
  errorMsgIsDisplayed,
}: Props): JSX.Element {
  const [inputProjectTitle, setInputProjectTitle] = useState('');
  const [inputPlaceHolder, setInputPlaceholder] = useState(defaultPlaceholder);
  const modalRef = useRef(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const inputField = inputRef.current;

  const handleOnChange = (e: React.FormEvent<HTMLInputElement>): void => {
    if (inputField) {
      inputField.style.borderColor = 'inherit';
    }
    setInputPlaceholder(defaultPlaceholder);
    setInputProjectTitle(e.currentTarget.value);
  };

  const onFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedTitle = removeExtraSpace(inputProjectTitle);
    if (trimmedTitle.length < 1) {
      setInputProjectTitle('');
      setInputPlaceholder('Input a valid title');
      if (inputField) {
        inputField.style.borderColor = 'red';
        inputField.style.color = 'black';
      }
      return;
    }
    handleFormSubmit(trimmedTitle);
    setInputProjectTitle('');
  };

  useLayoutEffect(() => {
    const modal = modalRef.current;
    window.addEventListener('click', (e) => {
      if (modal) {
        if (e.target === modal) {
          handleHideModal();
        }
      }
    });
    return () =>
      window.removeEventListener('click', (e) => {
        if (modal) {
          if (e.target === modal) {
            handleHideModal();
          }
        }
      });
  }, [handleHideModal]);

  return (
    <>
      <Head>{null}</Head>
      <div className={styles.modal} ref={modalRef}>
        <div className={styles.modalContent}>
          <button
            type="button"
            onClick={() => handleHideModal()}
            className={styles.close}
          >
            &times;
          </button>
          <form className={styles.newProject} onSubmit={onFormSubmit}>
            <h1>Add new project</h1>
            <label htmlFor="title">
              <input
                ref={inputRef}
                type="text"
                id="title"
                placeholder={inputPlaceHolder}
                required
                value={inputProjectTitle}
                onChange={(e) => handleOnChange(e)}
              />
            </label>
            <br />
            <button type="submit" className={styles.btn}>
              Add
            </button>
            {errorMsgIsDisplayed && (
              <p className={styles.errorMsg}>The project already exists!</p>
            )}
          </form>
        </div>
      </div>
    </>
  );
}
