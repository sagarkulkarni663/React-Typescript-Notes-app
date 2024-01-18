import React, { useState } from "react"
import Textfiled from "./Textfiled"
import { styled } from "@mui/system";
import CustomButton from "./Button";
import { Box } from "@mui/material"

type formData = {
  title: string;
  input: string;
}
type validation = {
  title: boolean;
  input: boolean;
}
type items = {
  id: number;
  title: string;
  input: string;
}[]
const MainContainer = styled("div")({
  display: "flex",
  gap: "20px"
});
const AddNotes: React.FC = () => {
  const [notes, setNotes] = useState<formData>({ title: "", input: "" })
  const [validate, setValidate] = useState<validation>({ title: false, input: false })
  const [items, setItems] = useState<items>([])

  const handleOnchange = (event: { target: { name: string, value: string } }) => {
    const { name, value } = event.target;
    setNotes((prevState) => ({
      ...prevState,
      [name]: value
    }))
  }
  const handleOnFocus = (event: { target: { name: string, value: string } }) => {
    const { name } = event.target;
    setValidate((prevState) => ({
      ...prevState,
      [name]: false
    }))
  }
  const handleOnBlur = (event: { target: { name: string, value: string } }) => {
    const { name } = event.target;

    if ((notes as any)[name] === "") {
      setValidate((prevErrors) => ({
        ...prevErrors,
        [name]: true
      }));
    }
  };
  const handleAdd = () => {
    setItems((prevState) => ([
      ...prevState,
      { id: prevState.length, title: notes.title, input: notes.input },
    ]));
  };


  const handleSubmit = () => {
    handleAdd()
    console.log(items)
  }
  const handleDelete = (id: number) => {
    let prevdata = [...items]
    const deleteData = prevdata.filter((item) => item.id !== id)
    setItems(deleteData)
  }

  return (
    <Box>
      <MainContainer>
        <Textfiled
          name={"title"}
          value={notes.title}
          onChange={handleOnchange}
          onFocus={handleOnFocus}
          onBlur={handleOnBlur}
          error={validate.title} />
        <Textfiled
          name={"input"}
          value={notes.input}
          onChange={handleOnchange}
          onFocus={handleOnFocus}
          onBlur={handleOnBlur}
          error={validate.input} />
        <CustomButton
          disabled={notes.input === "" || notes.title === ""}
          onClick={handleSubmit}
        >submit
        </CustomButton>
      </MainContainer>
      <Box>
        {items.map((item) => (
          <div key={item.id}>
            <h3>{item.title}</h3>
            <p>{item.input}</p>
            <CustomButton onClick={() => handleDelete(item.id)} disabled={false} >Delete</CustomButton>
          </div>
        ))}
      </Box>
    </Box>
  )
}


export default AddNotes
