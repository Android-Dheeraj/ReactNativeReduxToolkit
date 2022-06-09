import React, { useEffect } from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  ListRenderItemInfo,
  Text,
} from 'react-native';
import styles from './user_post.styles';
import { UserPostView } from '../../views/user_post_view';
import { UserPost } from '../../types';
import { fetchUserPostThunk } from '../../api/post.api';
import { useAppSelector, useAppDispatch } from '../../hooks/app.hooks';
type Props = {
  name?: String;
};

const ErrorView = () => {
  return (
    <View>
      <Text>{'Error Occured'}</Text>
    </View>
  );
};

const LoadingView = () => {
  return (
    <View>
      <Text>{'Loading...'}</Text>
    </View>
  );
};
export const UserPostList: React.FC<Props> = ({ name }) => {
  const {
    postList = [],
    status,
    error,
  } = useAppSelector(state => state.postSlice);

  const dispatch = useAppDispatch();
  const renderItem = (info: ListRenderItemInfo<UserPost>) => (
    <UserPostView userPost={info.item} />
  );
  useEffect(() => {
    dispatch(fetchUserPostThunk());
  }, []);
  return (
    <SafeAreaView style={styles.rootContainer}>
      <View style={styles.containerView}>
        <FlatList
          ListEmptyComponent={
            status === 'Loading' ? (
              <LoadingView />
            ) : status === 'Fail' ? (
              <ErrorView />
            ) : null
          }
          data={postList}
          initialNumToRender={10}
          keyExtractor={(item: UserPost, index: number) =>
            `item-${item.id}-index-${index}`
          }
          renderItem={renderItem}
        />
      </View>
    </SafeAreaView>
  );
};
