import { Card, Image, Tag, Typography } from 'antd'
import React from 'react'
import './GameCard.scss'
import OddButton from '../BetSlips/OddButton/OddButton'

const Team = ({data}:any) => {
    return(
        <div style={{color:'white', fontWeight:"bold"}}>
            <Image preview={false} style={{marginRight:10}} width={30} src='https://imgs.search.brave.com/KKjE1O9BP4lbbR2-nCsEojl5lpURBRslVSPSjtK2_cI/rs:fit:560:320:1/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi83Lzc5L0Zs/YWdfb2ZfTmlnZXJp/YS5zdmcvNTEycHgt/RmxhZ19vZl9OaWdl/cmlhLnN2Zy5wbmc' />
        {' '} Hollang
        </div>
    )
}

const Match = ({data}:any) => {
    return (
        <>
        <div style={{display:'flex', justifyContent:'space-between', padding:10, textAlign:'center', color:'white'}}>
            <Team />
            <p>VS</p>
            <Team />
        </div>
        <div style={{textAlign:'center', color:'white'}}>15 July 2023 , 08: 30</div>
        </>
    )
}

const Odds = ({data}:any) => {
    const odds = [
        {
            type:'Win Draw Win',
            odds:[
                {winner:'1', odd:2.1},
                {winner:'2', odd:2.1},
                {winner:'X', odd:2.1},
            ]
        },
        {
            type:'Win Draw Win',
            odds:[
                {winner:1, odd:2.1},
                {winner:1, odd:2.1},
                {winner:1, odd:2.1},
            ]
        },
        {
            type:'Win Draw Win',
            odds:[
                {winner:'1', odd:2.1},
                {winner:'2', odd:2.1},
                {winner:'X', odd:2.1},
            ]
        },
        {
            type:'Win Draw Win',
            odds:[
                {winner:1, odd:2.1},
                {winner:1, odd:2.1},
                {winner:1, odd:2.1},
            ]
        },
    ]
    return (
        <div style={{padding:10,display:'flex', gap:20, color:'white', width:'100%', overflow:'scroll'}}>
             {
                odds?.map((odd:any)=> {
                    return <div>
                        {odd?.type}
                        <div style={{display:'flex', gap:10, margin:'10px auto'}}>
                        {
                            odd?.odds?.map((o:any)=> {
                                return <OddButton odd={o?.odd} label={o?.winner} />
                            })
                        }
                        </div>
                    </div>
                })
             }
        </div>
    )
}

const GameCard = () => {
  return (
    <Card className='game__card'>
        <Typography.Title level={5} style={{textAlign:'center', color:"#88B6FF", margin:5}}>NBA</Typography.Title>
        <Match />
        <Odds />
    </Card>
  )
}

export default GameCard