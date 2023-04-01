function unroll ( squareArray,newArray=[] )
{
    for ( let item of squareArray )
    {
        if ( item instanceof Array )
        {
            unroll( item, newArray );
        } else
        {
            newArray.push(item)
        };
    };
    return newArray;

}

module.exports = unroll;
