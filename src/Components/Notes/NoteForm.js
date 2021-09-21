const NoteForm = (props) => {
  const {title, content, changeContentHandler, changeTitleHandler, clickHandler, formTitle} = props;

  return (
    <div>
      <h2>{formTitle}</h2>
      <div>
        <input
          type="text"
          name="title"
          className="form-input mb-30"
          placeholder="العنوان"
          value={title}
          onChange={changeTitleHandler}
        />

        <textarea
          rows="10"
          name="content"
          className="form-input"
          placeholder="النص"
          value={content}
          onChange={changeContentHandler}
        />

        <a href="#" className="button green" onClick={clickHandler}>
          حفظ
        </a>
      </div>
    </div>
  );
}

export default NoteForm;