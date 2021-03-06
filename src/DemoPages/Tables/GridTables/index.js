import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';
import Paper from '@material-ui/core/Paper';
import { TablePagination } from '@material-ui/core';
import { AutoSizer, Column, Table } from 'react-virtualized';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import bg1 from '../../../assets/utils/images/originals/city.jpg';
import MenuTable from './menuTable';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import ManualTable from "./table"
function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
  }

  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    table: {
      minWidth: 650,
    },
  
  }));

const styles = (theme) => ({
  flexContainer: {
    display: 'flex',
    alignItems: 'center',
    boxSizing: 'border-box',
  },
  table: {
    // temporary right-to-left patch, waiting for
    // https://github.com/bvaughn/react-virtualized/issues/454
    '& .ReactVirtualized__Table__headerRow': {
      flip: false,
      paddingRight: theme.direction === 'rtl' ? '0 !important' : undefined,
    },
  },
  tableRow: {
    cursor: 'pointer',
  },
  tableRowHover: {
    '&:hover': {
      backgroundColor: theme.palette.grey[200],
    },
  },
  tableCell: {
    flex: 1,
  },
  noClick: {
    cursor: 'initial',
  },
});

class MuiVirtualizedTable extends React.PureComponent {
  static defaultProps = {
    headerHeight: 48,
    rowHeight: 48,
  };

  // getRowClassName = ({ index }) => {
  //   const { classes, onRowClick } = this.props;

  //   return clsx(classes.tableRow, classes.flexContainer, {
  //     [classes.tableRowHover]: index !== -1 && onRowClick != null,
  //   });
  // };

  // cellRenderer = ({ cellData, columnIndex }) => {
  //   const { columns, classes, rowHeight, onRowClick } = this.props;
  //   return (
  //     <TableCell
  //       component="div"
  //       className={clsx(classes.tableCell, classes.flexContainer, {
  //         [classes.noClick]: onRowClick == null,
  //       })}
  //       variant="body"
  //       style={{ height: rowHeight }}
  //       align={(columnIndex != null && columns[columnIndex].numeric) || false ? 'right' : 'left'}
  //     >
  //       {cellData}
  //     </TableCell>
  //   );
  // };

  // headerRenderer = ({ label, columnIndex }) => {
  //   const { headerHeight, columns, classes } = this.props;

  //   return (
  //     <TableCell
  //       component="div"
  //       className={clsx(classes.tableCell, classes.flexContainer, classes.noClick)}
  //       variant="head"
  //       style={{ height: headerHeight }}
  //       align={columns[columnIndex].numeric || false ? 'right' : 'left'}
  //       style={{padding:40}}
  //     >
  //       <span>{label}</span>
  //     </TableCell>
  //   );
  // };

  render() {
    const { classes, columns, rowHeight, headerHeight, ...tableProps } = this.props;
    return (
      <AutoSizer>
        {({ height, width }) => (
          <Table
            height={height}
            width={width}
            rowHeight={rowHeight}
            gridStyle={{
              direction: 'inherit',
            }}
            headerHeight={headerHeight}
            className={classes.table}
            {...tableProps}
            rowClassName={this.getRowClassName}
          >
            {columns.map(({ dataKey, ...other }, index) => {
              return (
                <Column
                  key={dataKey}
                  headerRenderer={(headerProps) =>
                    this.headerRenderer({
                      ...headerProps,
                      columnIndex: index,
                    })
                  }
                  className={classes.flexContainer}
                  cellRenderer={this.cellRenderer}
                  dataKey={dataKey}
                  {...other}
                />
              );
            })}
          </Table>
        )}
      </AutoSizer>
    );
  }
}

// MuiVirtualizedTable.propTypes = {
//   classes: PropTypes.object.isRequired,
//   columns: PropTypes.arrayOf(
//     PropTypes.shape({
//       dataKey: PropTypes.string.isRequired,
//       label: PropTypes.string.isRequired,
//       numeric: PropTypes.bool,
//       width: PropTypes.number.isRequired,
//     }),
//   ).isRequired,
//   headerHeight: PropTypes.number,
//   onRowClick: PropTypes.func,
//   rowHeight: PropTypes.number,
// };

// const VirtualizedTable = withStyles(styles)(MuiVirtualizedTable);

// ---

const sample = [
  ['Frozen yoghurt', 159, 6.0, 24, 4.0],
  ['Ice cream sandwich', 237, 9.0, 37, 4.3],
  ['Eclair', 262, 16.0, 24, 6.0],
  ['Cupcake', 305, 3.7, 67, 4.3],
  ['Gingerbread', 356, 16.0, 49, 3.9],
];

function createData(id, dessert, calories, fat, carbs, protein) {
  return { id, dessert, calories, fat, carbs, protein };
}

const rows = [];

for (let i = 0; i < 200; i += 1) {
  const randomSelection = sample[Math.floor(Math.random() * sample.length)];
  rows.push(createData(i, ...randomSelection));
}

export default function GridTables() {
    const classes = useStyles();

  return (

    <React.Fragment>


<Grid md={12} sm={12} xs={12} container item style={{paddingBottom:"20px",display:"block"}}>
                    <h4>Projects</h4>
                    <Breadcrumbs  aria-label="breadcrumb">
                    <Link color="inherit" href="/" onClick={handleClick} style={{color:'orange'}}>
                        Projects
                    </Link>
                    
                    <Typography color="textPrimary" style={{fontWeight:700,color:'orange'}}>Work In Progress</Typography>
                    </Breadcrumbs>
                    <Typography variant="subtitle2" component="subtitle2">
                Henry KR | Owner
                </Typography>

                    </Grid>
                    <Grid  md={12} sm={12} xs={12} container item style={{paddingBottom:"20px",display:"contain"}} >

                    <Grid container spacing={3}>
     
        
       
        <Grid item xs={1}tyle={{padding:"20px 0px 10px 20px",}}>
        <Box  color="primary.main" clone style={{height:50,width:70}}>
        <img src={Filter} alt="" style={{height:30,width:40}}/>

                  </Box>
     
      

       
        </Grid>

        <Grid item xs={9}>

         
        </Grid>
        
        <Grid item xs={2}>
        <MenuTable/>
        
        </Grid>
      </Grid>

       </Grid>
       
    {/* <Paper style={{ height: 400, width: '100%' ,padding:"20px 0px 10px 20px"}}>
      <Grid md={12} sm={12} xs={12} container >

     
      <VirtualizedTable
        rowCount={rows.length}
        rowGetter={({ index }) => rows[index]}
        
        
        columns={[
          {
            width: "max-content",
            label: 'Compaign',
            dataKey: 'dessert',
          },
          {
            width: "max-content",
            label: 'Client',
            dataKey: 'calories',
            numeric: true,
          },
          {
            width: "max-content",
            label: 'Requested by',
            dataKey: 'fat',
            numeric: true,
          },
          {
            width: "max-content",
            label: 'Next Due Date',
            dataKey: 'carbs',
            numeric: true,
          },
          {
            width: "max-content",
            label: 'Notification',
            dataKey: 'protein',
            numeric: true,
          },
          {
            width: "max-content",
            label: 'Action',
            dataKey: 'protein',
            numeric: true,
          },
        ]}
      />
      </Grid>
    </Paper> */}
    <ManualTable/>

    </React.Fragment>
  );
}
