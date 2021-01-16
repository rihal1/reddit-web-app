import WhatshotIcon from '@material-ui/icons/Whatshot';
import GradeIcon from '@material-ui/icons/Grade';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import BarChartIcon from '@material-ui/icons/BarChart';
const filterData=[
    {
        label:'hot',
        avatar:<WhatshotIcon color="secondary" style={{marginLeft:10,marginRight:10}}></WhatshotIcon>
    },
    {
        label:'new',
        avatar:<GradeIcon color="secondary" style={{marginLeft:10,marginRight:10}}></GradeIcon>
    },
    {
        label:'controversial',
        avatar:'c',       
    },
    {
        label:'top',
        avatar:<BarChartIcon color="secondary" style={{marginLeft:10,marginRight:10}}></BarChartIcon>,
        
    },
    {
        label:'rising',
        avatar:<TrendingUpIcon color="secondary" style={{marginLeft:10,marginRight:10}}></TrendingUpIcon>,
        
    }
]

export default filterData;