import React from 'react'
import ReactDOM from 'react-dom'
import Cards from './Cards'
import './index.css'



ReactDOM.render(
  <>
    <h1 className="heading_style">List of top 5 Netflix Series in 2020</h1>

    <Cards imgsrc="https://wallpapercave.com/wp/wp4056410.jpg"  title="A Netflix Original Series" sname="Dark"
    link="https://www.netflix.com/bd/title/80100172" />
    <Cards imgsrc="https://www.hellokpop.com/wp-content/uploads/2020/03/Extracurricular.jpg" title="A Netflix Original Series" sname="Extra Curricular"
    link="https://www.netflix.com/bd/title/80990668" />
    <Cards imgsrc="https://i.ytimg.com/vi/b9EkMc79ZSU/maxresdefault.jpg" title="A Netflix Original Series" sname="Stranger Things"
    link="https://www.netflix.com/bd/title/80057281" />

    <Cards imgsrc="https://www.whats-on-netflix.com/wp-content/uploads/2016/02/the-vampire-diaries-season-7-netflix-1024x576.jpg" title="A Netflix Original Series" 
    sname="The Vampire Diaries" link="https://www.spin1038.com/movies-and-tv/netflix-announce-the-vampire-diaries-is-back-on-the-streamer-1143577" />

    <Cards imgsrc="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRuQoguHNsihcAWJNhwZpqjnHErGaQXeHPC10X_wpGGCcn1Tt0G"
    title="A Netflix Original Series" sname="My First Love" link="https://www.netflix.com/bd/title/81026700" />
  
  </>,
  document.getElementById("root")
)