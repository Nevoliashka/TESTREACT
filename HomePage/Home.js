import React, {Component} from 'react';
import {View, ScrollView, Image} from 'react-native'
import {FullPhoto, HOME} from '../routes'
import {Header, Img, Layout} from "../src/components/uikit"

type Props = { navigation: Function }
export default class Home extends Component<Props> {
    static navigationOptions = ({ navigation }) => {
        const params = navigation.state.params || {}
    }
    state = {
        title: 'Picture',
        author: 'Drokin Igor',
        data: []
    }

    componentDidMount = async () => {
        try {
            const response = await fetch('https://api.unsplash.com/photos/?client_id=896d4f52c589547b2134bd75ed48742db637fa51810b49b607e37e46ab2c0043')
            const data = await response.json()
            this.setState({data})
        } catch (error) {
            console.log(error)
        }
    }


    render() {
        const {title, author, data} = this.state
        const { navigation } = this.props
        return (
            <View>
                <Header title={title} name={author} />

                <ScrollView>
                    <Layout>
                        {data.map(item => (
                            <Img data={item} key={item.id} onPress={() =>   navigation.navigate(FullPhoto, {item})} />
                            ))}
                    </Layout>
                </ScrollView>
            </View>


        )
    }
}


