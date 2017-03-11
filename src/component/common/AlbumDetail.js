import React from 'react';
import { Text, Image, View, Linking } from 'react-native';
import { Card, CardSection, Button } from './';

const AlbumDetail = ({ album }) => {
  const { title, artist, thumbnail_image, image, url } = album;
  const {
    thumbnailStyle,
    headerStyle,
    thumbnailContainerStyle,
    headerTextStyle,
    imageStyle
  } = styles;

  return (
    <Card>
      <CardSection>
        <View style={thumbnailContainerStyle}>
          <Image
            style={thumbnailStyle}
            source={{ uri: thumbnail_image }}
          />
        </View>

        <View style={headerStyle}>
          <Text style={headerTextStyle}>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardSection>

      <CardSection>
        <Image
          style={imageStyle}
          source={{ uri: image }}
        />
      </CardSection>

      <CardSection>
        <Button pressAction={() => Linking.openURL(url)} buttonText={'Buy Now'} />
      </CardSection>
    </Card>
  );
};

const styles = {
  thumbnailStyle: {
    width: 50,
    height: 50
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  headerStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  headerTextStyle: {
    fontSize: 18
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null

  }

};

export { AlbumDetail };
