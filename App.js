import React from 'react';
import {Alert} from "react-native"; 
import Loading from "./Loading";
import * as Location from "expo-location";


export default class extends React.Component {
  state = { //로딩 상태를 확인하는 변수
    isLoading: true
  };
  getLocation = async() => {
    try{
      await Location.requestPermissionsAsync(); //permissions이 승인 됐을 때 resolve된 promise를 리턴해라(거절시엔 rejects리턴)
      //await이 필요한 것들에 async가 붙음
      const {coords: { latitude, longitude}} = await Location.getCurrentPositionAsync(); //지역정보 받아오기, 받아올 때 까지 기다림
      //ES6 객체 비구조화 문법 사용해서 지역 정보 중에 coords뽑고 위도와 경도 뽑는다.
      // Send to API and  get Weather
      this.setState({isLoading: false}); // 없애면 잘 작동
    } catch (error) { // try 블럭에서 error가 발생하면 여기가 실행
      Alert.alert("Can't find you.", "So sad");
    }
  }
  componentDidMount(){  //컴포넌트가 만들어지고 첫 렌더링을 다 마친 후 실행되는 메소드
    this.getLocation();
  }
  render(){
    const { isLoading} = this.state;
    return isLoading ? <Loading /> : null; // isLoading이 true일때만 제대로 반환
  }
}

