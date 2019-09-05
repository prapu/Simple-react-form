import * as React from 'react';
import * as ReactDom from 'react-dom';

export class Book extends React.Component<{},IBookState>{
     constructor(props) {
        super(props)

        //declare initial state
        this.state={
            book:{
                name:'',
                description:'',
                category:'',
                price:0,
                publisheddate:null
            }
        }
     }
     render(){        
         return <React.Fragment>
             <h3>Manage Book</h3>
             <form>
                <label>Book Name:</label>
                <input type="text" 
                        id="bookname" 
                        name="bookname" 
                        placeholder="Book name" 
                        onChange={(e)=>{
                            //collect the textbox current value
                            var val=e.target.value;
                            //using react setState() function to update
                            //name property of the state->book object
                            this.setState(prevState=>({
                                book:{ ...prevState.book,
                                    name:val}
                            }))
                        }}
                        value={this.state.book.name}
                        /><br/>
                <label>Description</label>
                <input type="text" 
                        id="description" 
                        name="description" 
                        placeholder="Book description"
                        onChange={(e)=>{
                            var val=e.target.value;
                            this.setState(prevState=>({
                                book:{...prevState.book,description:val}
                            }))
                        }}
                        value={this.state.book.description}
                         /><br/>
                <label>Category</label>
                <select id="category" 
                    onChange={(e)=>{
                    var val=e.target.value;
                    this.setState(prevState=>({
                        book:{...prevState.book,category:val}
                    }))
                }}
                value={this.state.book.category}>
                    <option>--select--</option>
                    <option>Fiction</option>
                    <option>Story</option>
                    <option>Adventure</option>
                </select> <br/>
                <label>Price</label>  
                <input type="numeric" 
                        id="price"  
                        placeholder="Price" 
                        value={this.state.book.price}
                        onChange={(e)=>{
                            //a special momant, since the state price
                            //property is number we need to use parseFloat()
                            //function to convert the text value in number
                            var val=parseFloat(e.target.value);
                            this.setState(prevState=>({
                                book:{...prevState.book,price:val}
                            }))
                        }}
                        /><br/>
                <label>Date published</label>
                <input type="date"
                        id="datepublished"
                        placeholder="Date published" 
                        value={this.state.book.publisheddate}
                        onChange={(e)=>{
                            var val=e.target.value;
                            this.setState(prevState=>({
                                book:{...prevState.book,publisheddate:val}
                            }))
                        }}
                        /><br/>
                <button type="button"
                    onClick={(e)=>{
                        console.log(this.state.book);
                    }}
                >Submit</button>
                <button type="button">Cancel</button>
            </form>
            <h2>Book State</h2>
            <table>
                <tr>
                    <td>Name</td>
                    <td>{this.state.book.name}</td>
                </tr>
                <tr>
                    <td>Description</td>
                    <td>{this.state.book.description}</td>
                </tr>
                <tr>
                    <td>Category</td>
                    <td>{this.state.book.category}</td>
                </tr>
                <tr>
                    <td>Price</td>
                    <td>{this.state.book.price}</td>
                </tr>
                <tr>
                    <td>Published Date</td>
                    <td>{this.state.book.publisheddate}</td>
                </tr>
            </table>
         </React.Fragment>
     }
 }
 //State interface
 interface IBookState{
     book:{
         name:string;
         description:string;
         category:string;
         price:number;
         publisheddate:any;
     }
 }
 export default Book;