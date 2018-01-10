import React from 'react';
import { StyleSheet,
         Text,
         View,
         ActivityIndicator,
         TouchableHighlight,
         ScrollView
         } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchData } from '../actions';

class HomeScreen extends React.Component {
  static navigationOptions = {
    header : null
};

componentDidMount() {
  this.props.getData();
}

render() {
  const {result, isFetching } = this.props;

  if (isFetching) {
    return (
         <View
           style={{
            flex: 1,
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center"
           }}
         >
           <ActivityIndicator size={"large"} />
         </View>
       );
  }
   else {
     return (
        <View
          style={{
            flex: 1,
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center"
          }}
        >

          <ScrollView>{

             result ? (
               result.map((res,index) => {
                return(
                  <View
                  key={index}
                  style={{marginTop:20}}>
                    <View style={{backgroundColor: 'pink', alignItems:'center',justifyContent: 'center'}}>
                      <Text>{res.createdOn}</Text>
                    </View>

                    <View style={{backgroundColor:'lightblue'}}>

                        {res.taskList.map((arr,index) => {
                          return(
                            <Text key={index}>Task: {arr.task}</Text>
                          );
                      })
                    }
                      </View>
                  </View>
                );
            })
          )    : null

          }
          </ScrollView>
        </View>
       );
   }
}

}

function mapStateToProps(state) {
  return {
    result: state.result.result_array
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getData: () => dispatch(fetchData())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
