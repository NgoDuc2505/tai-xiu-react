const defaultGame = {
    banChon: true,
    win: 0,
    ground: 0,
    xucXac: [
        {
            img: '/img/2.png',
            point: 2,
        },
        {
            img: '/img/3.png',
            point: 3,
        },
        {
            img: '/img/4.png',
            point: 4,
        }
    ]
}

export const gameReducer = (state = defaultGame, action) => {
    switch (action.type) {
        case 'chon_Xuc_Xac':
            return { ...state, banChon: action.payload };
        case 'play_game':
           { let total =0;
            let status = true;
            for(let xx of state.xucXac){
                let diem = Math.floor(Math.random()*6 +1);
                xx.point = diem;
                xx.img=`/img/${diem}.png`;
                total += diem;
            }
            console.log(total)
            if(total >= 3 && total <= 10){
                status = false;
            }
            console.log(action.payload ? 'tai(11-17)' : 'xiu(4-10)')
            if(action.payload == status){
                let win = state.win += 1;
                alert('chuc mung')
                state ={...state,win}
            }
            state.ground+=1;
            return{...state}}
        default:
            break;
    }
    return state;
}