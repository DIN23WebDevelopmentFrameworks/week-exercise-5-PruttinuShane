import React from 'react';

interface IRecipeTagProps {
    tagName: string;
    onSelectTag: (tagName: string) => void;
}

const RecipeTag: React.FC<IRecipeTagProps> = ({ tagName, onSelectTag }) => {
    return (
        <div className="recipe-tag" onClick={() => onSelectTag(tagName)}>
            {tagName}
        </div>
    );
};

export default RecipeTag;
