import React from 'react';
import { Appbar } from 'react-native-paper';
import { StackHeaderProps } from '@react-navigation/stack';

export default function AppBar({ navigation, back, route, options }: StackHeaderProps) {
  return (
    <Appbar.Header>
      {/* Can navigate back (Second screen) -> show back button */}
      {back ? (
        <Appbar.BackAction onPress={() => navigation.goBack()} />
      ) : null}

      <Appbar.Content title={options.title ?? route.name} />

      {/* Can't navigate back (Home screen) -> show arrow-right to Second screen */}
      {back ? null : (
        <Appbar.Action
          icon="arrow-right"
          onPress={() => navigation.navigate('Second')}
        />
      )}
    </Appbar.Header>
  );
}