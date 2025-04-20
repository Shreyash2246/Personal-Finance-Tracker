import { collection, addDoc, deleteDoc, doc, getDocs, query, where, writeBatch, runTransaction } from 'firebase/firestore';
import { db } from './config';

export const addTransaction = async (userId, transaction) => {
  try {
    const transactionsRef = collection(db, 'transactions');
    await addDoc(transactionsRef, {
      ...transaction,
      userId,
      createdAt: new Date().toISOString()
    });
  } catch (error) {
    throw new Error('Error adding transaction: ' + error.message);
  }
};

export async function getUserTransactions(userId) {
  try {
    const transactionsRef = collection(db, 'transactions');
    const q = query(transactionsRef, where('userId', '==', userId));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
  } catch (error) {
    throw new Error('Error fetching transactions: ' + error.message);
  }
}

export const deleteTransaction = async (transactionId) => {
  try {
    const transactionRef = doc(db, 'transactions', transactionId);
    await deleteDoc(transactionRef);
  } catch (error) {
    throw new Error('Error deleting transaction: ' + error.message);
  }
};

export const updateTransaction = async (transactionId, updates) => {
  try {
    const transactionRef = doc(db, 'transactions', transactionId);
    await runTransaction(db, async (transaction) => {
      const doc = await transaction.get(transactionRef);
      if (!doc.exists()) {
        throw new Error('Document does not exist!');
      }
      transaction.update(transactionRef, updates);
    });
  } catch (error) {
    throw new Error('Error updating transaction: ' + error.message);
  }
};

export const batchDeleteTransactions = async (transactionIds) => {
  try {
    const batch = writeBatch(db);
    transactionIds.forEach(id => {
      const docRef = doc(db, 'transactions', id);
      batch.delete(docRef);
    });
    await batch.commit();
  } catch (error) {
    throw new Error('Error deleting transactions: ' + error.message);
  }
};