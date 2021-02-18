import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import EditModal from '../components/EditModal';
import AppButton from '../components/ui/AppButton';
import AppCard from '../components/ui/AppCard';
import AppTextBold from '../components/ui/AppTextBold';

import { THEME } from '../theme';

const TodoScreen = ({ goBack, todo, onRemove, onSave }) => {
  const [modal, setModal] = useState(false);

  const savaHandler = (title) => {
    onSave(todo.id, title);
    setModal(false);
  };

  return (
    <View>
      <EditModal
        onSave={onSave}
        value={todo.title}
        visible={modal}
        onCancel={() => {
          setModal(false);
        }}
        onSave={savaHandler}
      />
      <AppCard style={styles.card}>
        <AppTextBold style={styles.title}>{todo.title}</AppTextBold>

        <AppButton title="Edit" onPress={() => setModal()}>
          <AntDesign name="edit" size={24} color="white" />
        </AppButton>
      </AppCard>
      <View style={styles.buttons}>
        <View style={styles.button}>
          <AppButton color={THEME.DELETE_COLOR} onPress={() => onRemove(todo.id)}>
            <MaterialIcons name="delete-outline" size={24} color="white" />
          </AppButton>
        </View>
        <View style={styles.button}>
          <AppButton onPress={goBack} color={THEME.GREY_COLOR}>
            <Ionicons name="ios-arrow-back" size={24} color="white" />
          </AppButton>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  card: {
    marginBottom: 20,
    padding: 15,
  },
  button: {
    width: '20%',
  },
  title: {
    fontSize: 18,
  },
});

export default TodoScreen;
