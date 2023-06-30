
const paginate=(followers)=>{
    const itemperPage=10
    const numberofPage =Math.ceil(followers.length/itemperPage)

    const newFollers=Array.from({length:numberofPage},(_,index)=>{
        const start=index * itemperPage
        return followers.slice(start,start + itemperPage)
    })
    return newFollers
}

export default paginate;