import React from 'react';
import Icon from '../Icon'

interface SearchProps {
    handleChange: (value: string) => void;
    searchString: string;
    clearSearch?: () => void;
}

const Search: React.FC<SearchProps> = ({ handleChange, searchString, clearSearch }) => (

    <div>
        <input
            defaultValue={searchString}
            name="search"
            onChange={(e) => handleChange(e.target.value)}
        />
        {searchString ? (
            <Icon name='clear' onClick={clearSearch} />
        ) : (
                <Icon name='search' />
            )}
    </div>
)
export default Search;