import React from 'react';
import RecipeTag from './RecipeTag';

interface IRecipeTagListProps {
    tagList: string[];
    onSelectTag: (tagName: string) => void;
}

const RecipeTagList: React.FC<IRecipeTagListProps> = ({ tagList, onSelectTag }) => {
    return (
        <div className="recipe-tag-list">
            <h1>Select a Recipe Tag</h1>
            {tagList.map((tag) => (
                <RecipeTag key={tag} tagName={tag} onSelectTag={onSelectTag} />
            ))}
        </div>
    );
};

export default RecipeTagList;
