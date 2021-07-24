import { query as q } from "faunadb";
import { fauna } from "../../../services/fauna";
import { stripe } from "../../../services/stripe";

export async function saveSubscription(
  subscriptionId: string,
  customerId: string
  ) {

    // buscar usuário no banco do fauna com o id CustomerId
    // salvar os dados da subscription no FaunaDB

    const userRef = await fauna.query(
      q.Select(
        "ref",
        q.Get(
          q.Match(
            q.Index("user_by_stripe_customer_id"),
        customerId
      ))
      ),
      );

      console.log("ref",userRef);

      const subscription = await stripe.subscriptions.retrieve(subscriptionId);

      const subscriptionData = {
        id: subscription.id,
        userId: userRef,
        status: subscription.status,
        price_id: subscription.items.data[0].price.id,
      }

      await fauna.query(
        q.Create(
          q.Collection("subscriptions"),
          {
            data: subscriptionData
          }
        )
      );


}