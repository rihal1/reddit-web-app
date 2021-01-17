import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Box, Avatar, Button } from '@material-ui/core';
import * as action from '../../store/actions/index';
import { connect } from 'react-redux';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import GradeIcon from '@material-ui/icons/Grade';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import BarChartIcon from '@material-ui/icons/BarChart';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        padding: theme.spacing(4),
        flexDirection: 'row',
        flexWrap: 'wrap',
        backgroundColor: theme.palette.background.paper

    },
    chip: {
        textTransform: 'capitalize',
        borderRadius: 20,
        height: 40,
        fontWeight: 'bold'
    },
    avatar: {
        height: 30,
        width: 30,
    }
}));

//  Filter component for filtering the posts with filtertypes as 
// ('Hot','New','Controversial','Rising')

const FilterComp = (props) => {
    const classes = useStyles();
    //Filter data
    const [filterData, setFilterData] = useState([
        {
            label: 'hot',
            avatar: <WhatshotIcon color="secondary"></WhatshotIcon>,
            selected: true,
            classNames: [classes.chip]
        },
        {
            label: 'new',
            avatar: <GradeIcon color="secondary" ></GradeIcon>,
            selected: false,

            classNames: [classes.chip]
        },
        {
            label: 'controversial',
            avatar: 'c',
            selected: false,
            classNames: [classes.chip]
        },
        {
            label: 'top',
            avatar: <BarChartIcon color="secondary" ></BarChartIcon>,
            selected: false,
            classNames: [classes.chip]

        },
        {
            label: 'rising',
            avatar: <TrendingUpIcon color="secondary" ></TrendingUpIcon>,
            selected: false,
            classNames: [classes.chip]

        }
    ]);

    //sets the type of the filter for loading data and handle the selection of the filter
    const handleClick = (param) => {
        let copyFilterData = [...filterData];
        copyFilterData = copyFilterData.map(item => {
            item.selected = false;
            return item;
        });
        let index = copyFilterData.findIndex(item => item.label === param.label);
        copyFilterData[index].selected = true;
        setFilterData(copyFilterData);
        props.setFilter(param.label);
    };

    return (
        <div className={classes.root} >
            {
                filterData.map(item => {

                    return (item.label === 'controversial' ?


                        <Box mx={1}>
                            <Button key={item.label}
                                variant={item.selected ? 'contained' : 'outlined'}
                                className={classes.chip}
                                startIcon={<Avatar className={classes.avatar}>{item.avatar}</Avatar>}
                                onClick={() => { handleClick(item) }}
                            >
                                {item.label}
                            </Button>
                        </Box>
                        :
                        <Box mx={1}>
                            <Button key={item.label}
                                variant={item.selected ? 'contained' : 'outlined'}
                                className={classes.chip}
                                startIcon={<Avatar className={classes.avatar}>{item.avatar}</Avatar>}
                                onClick={() => { handleClick(item) }}
                            >
                                {item.label}
                            </Button>
                        </Box>
                    )
                })

            }

        </div>
    )
}

//maps the filterType stste to component property
const mapStateToProps = state => {
    return {
        filterType: state.homeStore.filterType,


    }
};
//maps the setFilter action to props
const mapDispatchToProps = dispatch => {
    return {
        setFilter: (param) => dispatch(action.setFilter(param)),
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(FilterComp);