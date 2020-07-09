import React, { useState } from 'react'
import FileUpload from './FileUpload'

const { Title } = Typography;
const { TextArea } = Input;

const Continents = [
    { key: 1, value: "Africa" },
    { key: 2, value: "Europe" },
    { key: 3, value: "Asia" },
    { key: 4, value: "North America" },
    { key: 5, value: "South America" },
    { key: 6, value: "Australia" },
    { key: 7, value: "Antarctica" }
]

function FormAddRecipe(props) {

    const [TitleValue, setTitleValue] = useState("")
    const [DescriptionValue, setDescriptionValue] = useState("")
    const [PriceValue, setPriceValue] = useState(0)
    const [CategoryValue, setCategoryValue] = useState('')

    const [Images, setImages] = useState([])


    const onTitleChange = (event) => {
        setTitleValue(event.currentTarget.value)
    }

    const onDescriptionChange = (event) => {
        setDescriptionValue(event.currentTarget.value)
    }

    const onPriceChange = (event) => {
        setPriceValue(event.currentTarget.value)
    }

    const onCategorySelectChange = (event) => {
        setCategoryValue(event.currentTarget.value)
        
    }

    
    

    return (
        <div>
            <FileUpload/>
    
            <form style={{width:'70%',margin:'auto',position:"relative",top:'50px'}}>
  <div class="form-group">
    <label for="title">Email address</label>
    <input type="text" class="form-control" id="title" placeholder="tiltle" onChange={onTitleChange}/>
  </div>
  <div class="form-group">
    <label for="description">Description</label>
    <textarea class="form-control" id="description" rows="3" onChange={onDescriptionChange}></textarea>
  </div>

  <div class="form-group">
    <label for="category">Example select</label>
    <select class="form-control" id="category" onChange={onCategorySelectChange}>
      <option>Tunisian</option>
      <option>Italien</option>
      <option>chinnese</option>
      <option>Mexican</option>
      <option>Egyptian</option>
    </select>
  </div>
  <button type="button" class="btn btn-primary">Submit</button>

</form>
</div>
    )
}

export default FormAddRecipe
