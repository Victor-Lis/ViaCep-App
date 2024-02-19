import styled from "styled-components/native"
import Animated from "react-native-reanimated"
import { TouchableOpacity } from "react-native-gesture-handler"

export const Container = styled(Animated.createAnimatedComponent(TouchableOpacity))`
	display: flex;
	justify-content: center;
	/* align-items: center; */
	padding: 10px;
	background-color: #fff;
	border-radius: 10px;
	margin-bottom: 20px;
`

export const Title = styled.Text`
	width: 100%;
	/* padding: 0 2%; */
	text-align: left;
	font-size: 20px;
	font-weight: bold;
	margin-bottom: 10px;
`

export const RowsBox = styled.View`
	margin: 10px 0;
`

export const Row = styled.View`
	margin: 10px 0;
	width: 98%;
	padding: 0 2%;
	display: flex;
	align-items: center;
`

export const RowTitle = styled.Text`
	font-size: 16px;
	font-weight: bold;
`

export const RowText = styled.Text``
