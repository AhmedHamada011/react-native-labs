import axios from 'axios';
import React, { createContext, useContext, useEffect, useState } from 'react';
import {View,Text, StyleSheet, Pressable} from 'react-native';
import routes from '../common/routes';
import { usersContext } from '../navigations/root';
import { useNavigation } from '@react-navigation/native';
// 2nd way
const Home = () => {
    //    3-
    const {users}=useContext(usersContext);
    const {navigate}=useNavigation()
        return (
            <View>
                {users.map((ele)=><View style={{flexDirection:"row"}}><Text style={{width:200}} key={ele.id}>{ele.name}</Text>
                <Pressable style={styles.btnContainer} onPress={()=>{navigate(routes.details,ele.id)}} >
                    <Text>showDetails</Text>
                </Pressable>
                </View>)}
            </View>
        );
}

// 1'st way
// const Home = ({navigation}) => {
// //    3-
// const {users}=useContext(usersContext);

//     return (
//         <View>
//             {users.map((ele)=><View style={{flexDirection:"row"}}><Text style={{width:200}} key={ele.id}>{ele.name}</Text>
//             <Pressable style={styles.btnContainer} onPress={()=>{navigation.navigate(routes.details,ele.id)}} >
//                 <Text>showDetails</Text>
//             </Pressable>
//             </View>)}
//         </View>
//     );
// }

const styles = StyleSheet.create({
    btnContainer:{
        backgroundColor:"#6c71c4",
        borderRadius:10,
        padding:10,
        margin:10,
      
      },
      txt:{
        color:"white",
        fontSize:20,
        textAlign:"center",
      
      },
})

export default Home;
