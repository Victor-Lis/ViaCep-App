import styled from "styled-components/native";
import Animated from "react-native-reanimated";
import Feather from 'react-native-vector-icons/Feather'

export const ContainerScroll = styled.ScrollView``;

export const Container = styled(Animated.View)`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

export const GoBack = styled.TouchableOpacity`
  background: #fff;
  padding: 10px;
  margin: 10px 0;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  column-gap: 5px;
  border-radius: 10px;
`

export const ContentBox = styled.View`
  background: #fff;
  padding: 25px 20px;
  border-radius: 10px;
`

export const Title = styled.Text`
  margin: 5px 0;
  font-weight: bold;
  font-size: 25px;
`;

export const Box = styled.View`
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin-top: 30px;
  max-height: 50px;
`;

export const BoxTitle = styled.Text`
  flex: 1;
  text-align: left;
`;

export const TextInput = styled.TextInput`
  flex: 1;
  background-color: #f6f6f6;
  border-radius: 10px;
  padding: 5px 2.5%;
  height: 100%;
  color: #000;
`;

export const ErrorInput = styled.Text`
  font-size: 15px;
  color: #ff0000;
  width: 100%;
  text-align: center;
`;

export const SelectBox = styled.TouchableOpacity`
  background-color: #f6f6f6;
  border-radius: 10px;
  padding: 8px 2.5%;
  margin: 2px 0;
  text-align: center;
`;

export const SubmitButton = styled.TouchableOpacity` 
  padding: 5px 10px;
  border: 1px solid #00ff00;
  margin: 40px auto 0px auto;

  text-align: center;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 10px;
`;