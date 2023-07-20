import { PrismaClient } from "@prisma/client";

const prisma =new  PrismaClient()

async function main(){
//    await prisma.user.create({
//     data:{
//         name:'anadn',
//         email:'anandaa@gmail.com',
//         posts:{
//             create:{
//                 title:'hello'
//             }

//         },

//         profile:{
//             create:{
//                 bio:'i am anadn'
//             }
//         }

//     }
//    })

    // const users =await prisma.user.findMany({
    //     include:{
    //         posts:true,
    //         profile:true
    //     }
    // })
    // console.dir(users,{depth:null})

    // const update = await prisma.post.update({
    //     where:{
    //         id:1
    //     },
    //     data:{
    //         published:true
    //     },
    // })

    // console.log("--------------------------------------------")

    // console.log(update)

    const filterecord= await prisma.post.findMany({
        where:{
            OR:[{id:1}]
        }
    })

    console.log(filterecord)


}

main().then(async()=>{
    await prisma.$disconnect()
}).catch(async(e)=>{
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
}
)


