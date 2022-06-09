import React from 'react';
import { View, Text } from 'react-native';
import { UserPost } from '../../types';
import styles from './user_post_view.style';
export type Props = {
  userPost: UserPost;
};

export const UserPostView: React.FC<Props> = ({ userPost }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title} numberOfLines={1}>
        {userPost?.title}
      </Text>
      <Text style={styles.description}>{userPost?.body}</Text>
    </View>
  );
};
