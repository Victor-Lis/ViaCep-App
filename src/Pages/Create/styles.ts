import styled from "styled-components/native";
import Animated from "react-native-reanimated";

export const ContainerScroll = styled.ScrollView``;

export const Container = styled(Animated.View)`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  z-index: 1;  
`;

export const Title = styled.Text`
  margin: 10px;
  font-weight: bold;
  font-size: 25px;
`;

export const Form = styled.View`
  padding: 15px 0;
  width: 100%;
  height: 100dvh;

  border-radius: 2px;
  background-color: #fff;

  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const InputBox = styled.View`
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin-top: 10px;
  max-height: 50px;
`;

export const InputText = styled.Text`
  flex: 1;
  text-align: left;
`;

export const Input = styled.TextInput`
  flex: 1;
  background-color: #f6f6f6;
  border-radius: 10px;
  padding: 5px 2.5%;
  height: 100%;
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
  width: 35%;
  padding: 5px 10px;
  border: 1px solid #00ff00;
  margin: 20px 0 10px 0;

  text-align: center;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 10px;
`;