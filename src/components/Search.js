import { Input, Divider } from 'antd';

const Search = (props) => {

    return (
        <>
            <Divider>Search</Divider>
            <label>Search</label>
            <Input
                onChange={(e) => {
                console.log(e.target.value)
                props.filterFoods(e.target.value)}}
            />
        </>
    );
}

export default Search;
