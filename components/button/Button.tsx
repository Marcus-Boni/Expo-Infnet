import * as React from 'react';
import { Button as Btn } from 'react-native-paper';
import { StyleSheet, View } from 'react-native';

// Tipagem das propriedades do botão
interface CustomButtonProps {
  title: string;
  mode?: 'text' | 'outlined' | 'contained';
  loading?: boolean;
  disabled?: boolean;
}

// Componente de botão customizado
const Button: React.FC<CustomButtonProps> = ({
  title,
  mode = 'contained',
  loading = false,
  disabled = false,
}) => {
  return (
    <View style={styles.container}>
      <Btn
        mode={mode}
        loading={loading}
        disabled={disabled}
        contentStyle={styles.buttonContent}
        labelStyle={styles.label}
      >
        {title}
      </Btn>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  buttonContent: {
    paddingVertical: 8,
  },
  label: {
    fontSize: 16,
  },
});

export default Button;
