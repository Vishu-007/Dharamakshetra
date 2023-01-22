const express=require("express");
const path=require("path");
require("./db/conn");
const User=require("./models/usermessage");
const hbs=require("hbs");
const app=express();
const port=process.env.PORT || 3000;

// setting the path
const staticpath=path.join(__dirname, "../public");
const templatepath=path.join(__dirname, "../templates/views");
const partialpath=path.join(__dirname, "../templates/partials");
// middleware
app.use('/css',express.static(path.join(__dirname,"../node_modules/bootstrap/dist/css")));
app.use('/js',express.static(path.join(__dirname,"../node_modules/bootstrap/dist/js"))); 
app.use('/jq',express.static(path.join(__dirname,"../node_modules/jquery/dist"))); 

app.use(express.urlencoded({extended:false}));
app.use(express.static(staticpath)); 
app.set("view engine","hbs");
app.set("views",templatepath);
hbs.registerPartials(partialpath);

app.use(express.static(path.join(__dirname, './LoginAuthentication')));


// routing
// app.get(path,callback)
app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname, "./LoginAuthentication/index.html"));
})
app.get("/page1.html",(req,res)=>{
  res.sendFile(path.join(__dirname,"./Home/page1.html"))
})
app.get("/page2.html",(req,res)=>{
    res.sendFile(path.join(__dirname,"./Home/page2.html"))
  })
  app.get("/page3.html",(req,res)=>{
    res.sendFile(path.join(__dirname,"./Home/page3.html"))
  })
  app.get("/page4.html",(req,res)=>{
    res.sendFile(path.join(__dirname,"./Home/page4.html"))
  })
  app.get("/page5.html",(req,res)=>{
    res.sendFile(path.join(__dirname,"./Home/page5.html"))
  })
  app.get("/page6.html",(req,res)=>{
    res.sendFile(path.join(__dirname,"./Home/page6.html"))
  })
  app.get("/pacakges.html",(req,res)=>{
    res.sendFile(path.join(__dirname,"./Home/pacakges.html"))
  })
  app.get("/More.html",(req,res)=>{
    res.sendFile(path.join(__dirname,"./Home/More.html"))
  })
  app.get("/form.html",(req,res)=>{
    res.sendFile(path.join(__dirname,"./Home/form.html"))
  })

app.get("/authenticated",(req,res)=>{
    res.sendFile(path.join(__dirname, "./Home/index.html"))
})
app.get("/map",(req,res)=>{
    res.sendFile(path.join(__dirname, "./map/index.html"))
})

// app.get("/contact",(req,res)=>{
//     res.render("contact");
// })

app.post("/contact",async(req,res)=>{
    try{
        // res.send(req.body);
        const userData=new User(req.body);
        await userData.save();
        res.status(201).render("index");
    }catch(error){
        res.status(500).send(error);
    }
});

// creating server
app.listen(port,()=>{
    console.log(`server is running at port number ${port}`);
});